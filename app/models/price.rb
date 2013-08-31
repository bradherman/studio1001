class Price < ActiveRecord::Base
  self.inheritance_column = :_type_disabled
end
