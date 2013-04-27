set :environment, :development
configure :development do

	set :lock, true
 	set :bind, '127.0.0.1'
 	set :port, 4567
 	set :server, %w[webrick]
	set :max_conns, 1024
    set :timeout, 500000
    set :max_persistent_conns, 512
	
  end

configure :test do
	set :lock, true
 	set :bind, '127.0.0.1'
 	set :port, 4567
 	set :server, %w[webrick]
end

configure :production do  
	set :lock, true
 	set :bind, 'localhost'
 	set :port, 4567
 	set :server, %w[thin mongrel webrick]
 end
