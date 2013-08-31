Studio1001::Application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'
  root to: 'application#index'
  
  match 'about',                        to: 'application#about',     via: :all
  match 'contact',                      to: 'application#contact',   via: :all
  match 'services',                     to: 'application#services',  via: :all
  match 'spa',                          to: 'application#spa',       via: :all
  match 'shellac',                      to: 'application#shellac',   via: :all
  match 'painted_lady',                 to: 'application#painted_lady',                via: :all
  match 'artificial_nail_enhancement',  to: 'application#artificial_nail_enhancement', via: :all
end
