require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module SampleRailsReact
  class Application < Rails::Application
    config.browserify_rails.commandline_options = '-t babelify'

    # image uploadの設定
    config.autoload_paths += Dir[Rails.root.join('app', 'uploaders')]

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
