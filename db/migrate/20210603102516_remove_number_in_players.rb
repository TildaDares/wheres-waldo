class RemoveNumberInPlayers < ActiveRecord::Migration[6.1]
  def change
    remove_column :players, :number
  end
end
