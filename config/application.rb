require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SampleRailsReact
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.browserify_rails.commandline_options = '-t babelify'

    # image uploadをrails cでnamespace解決できないため、追加
    config.autoload_paths += Dir[Rails.root.join('app', 'uploaders')]

    # deviseのjson API対応
    config.to_prepare do
      DeviseController.respond_to :html, :json
    end

    # Rails g した時不要なファイルは生成しない
    config.generators do |g|
      g.test_framework  nil
      g.assets  false
      g.helper false
      g.stylesheets false
    end

    # 言語設定
    config.i18n.default_locale = :ja

    # TimeZone
    config.time_zone = 'Tokyo'
  end
end
