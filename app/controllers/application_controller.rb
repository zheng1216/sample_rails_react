class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_current_user_to_gon

  rescue_from ActiveRecord::RecordNotFound, with: :error_404

  def configure_permitted_parameters
    added_attrs = [:user_name, :email, :password, :password_confirmation]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys: added_attrs
  end

  def error_404
    begin
      info = Hash[]
      info[:path] = params[:path]
      info[:time] = Time.now
      info[:env] = {
        remote_addr: request.env['REMOTE_ADDR'],
        http_x_forwarded_for: request.env['HTTP_X_FORWARDED_FOR']
      }.to_json
    rescue Exception => e
      ::Rails::logger.error "ApplicationController#error_404: #save Error at queue #{e}"
    end
    respond_to do |format|
      format.html { render '404', status: :not_found }
      format.json { render json: {}, status: :not_found }
    end
  rescue ActionController::UnknownFormat => e
    ::Rails::logger.error "ApplicationController##{__method__}: #{e}"
    return head :not_found
  end

  def set_current_user_to_gon
    gon.current_user = current_user
  end
end
