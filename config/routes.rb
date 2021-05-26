Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :pictures, only: [:index, :show] do
        resources :characters, only: [:index, :show]
      end
      resources :players, only: [:index, :create]
    end
  end

  root 'api/v1/pictures#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
