class AddTypeToPrices < ActiveRecord::Migration
  def change
    add_column :prices, :type, :string
  end
end
