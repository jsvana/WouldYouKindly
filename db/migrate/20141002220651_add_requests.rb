class AddRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.string :name
      t.string :medium
      t.boolean :active
      t.integer :votes
      t.timestamps
    end
  end
end
