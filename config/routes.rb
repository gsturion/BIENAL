Rails.application.routes.draw do
  resources :events do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :artists, only: [ :index, :show ]
  end
  root :to => "artists#index"
end
