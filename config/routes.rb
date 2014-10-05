Rails.application.routes.draw do
	root 'application#index'

	resources :requests

	get '*path' => 'application#index'
end
