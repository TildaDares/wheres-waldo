class RenameTimeInPlayers < ActiveRecord::Migration[6.1]
  def change
    rename_column :players, :time, :number
  end
end
