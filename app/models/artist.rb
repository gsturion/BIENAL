class Artist < ApplicationRecord
  has_many :works
  has_many :events, through: :works
end
