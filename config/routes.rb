Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :pictures, only: [:index, :show] do
        resources :characters, only: [:index, :show]
        resources :players, only: [:index, :create, :show]
      end
    end
  end

  root 'static#index'
  get '/*path' => 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
