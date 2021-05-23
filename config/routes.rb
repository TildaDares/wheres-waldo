Rails.application.routes.draw do
  root 'pictures#index'
  namespace :api do
    namespace :v1 do
      resources :pictures, only: [:index, :show] do
        resources :characters, only: [:index, :show]
      end
      resources :players, only: [:index, :create]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
