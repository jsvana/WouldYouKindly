Rails.application.routes.draw do
	root 'application#index'

	resources :requests do
		member do
			post 'approve'
			post 'deny'
		end
	end

	get '*path' => 'application#index'
end
