# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

@user = User.create do |u|
    u.name = "Admin User"
    u.email = "admin@library.com"
    u.password = "Passw0rd"
    u.password_confirmation = "Passw0rd"
    u.usertype = "ADMIN"
    u.employee_id = 0
end
@user.save