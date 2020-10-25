class Event < ApplicationRecord
  has_many :works
  has_many :artists, through: :works
end
