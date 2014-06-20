class SetDefaultUserType < ActiveRecord::Migration
  def up
    change_column :users, :usertype, :string, :default => 'USER'
  end
end
