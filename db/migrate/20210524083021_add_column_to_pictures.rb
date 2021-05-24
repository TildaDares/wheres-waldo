class AddColumnToPictures < ActiveRecord::Migration[6.1]
  def change
    add_column :pictures, :name, :string
  end
end
