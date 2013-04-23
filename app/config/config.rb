

set :environment, :development

configure :development do

	
 	set :bind, '127.0.0.1'
 	set :port, 4567
 	set :server, %w[webrick]
	set :max_conns, 1024
    set :timeout, 30
    set :max_persistent_conns, 512
	
  end

configure :test do
 	set :bind, '127.0.0.1'
 	set :port, 4566
 	set :server, %w[mongrel]
end

configure :production do  
 	set :bind, 'localhost'
 	set :port, 4565
 	set :server, %w[thin mongrel webrick]
 end