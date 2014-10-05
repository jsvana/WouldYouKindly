class FillOutRequests < ActiveRecord::Migration
  def change
		add_column :requests, :artist, :string
		add_column :requests, :external_id, :string
		add_column :requests, :external_service, :string
		add_column :requests, :year, :integer
		add_column :requests, :rating, :string
		add_column :requests, :art, :string
		add_column :requests, :genres, :string
		add_column :requests, :link, :string
		add_column :requests, :link_service, :string
		add_column :requests, :audience_score, :integer
		add_column :requests, :critics_score, :integer
		add_column :requests, :runtime, :integer
  end
end
