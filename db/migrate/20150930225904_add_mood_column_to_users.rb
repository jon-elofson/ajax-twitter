class AddMoodColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :mood, :integer, null: false, default: 50
  end
end
