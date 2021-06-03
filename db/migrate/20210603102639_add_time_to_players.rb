class AddTimeToPlayers < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :time, :integer
  end
end
