class RemoveColumnFromPictures < ActiveRecord::Migration[6.1]
  def change
    remove_column :pictures, :image, :string
  end
end
