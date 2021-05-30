class Player < ApplicationRecord
  validates :name, :time, presence: true
  belongs_to :picture
end
