# Create some users
# user1 = User.create(name: 'Alice')
# user2 = User.create(name: 'Bob')

# Create some products
# product1 = Product.create(name: 'iPhone')
# product2 = Product.create(name: 'iPad')

# Create some reviews
# Review.create(user: user1, product: product1, star_rating: 4, comment: 'Great phone!')
# Review.create(user: user1, product: product2, star_rating: 5, comment: 'Love it!')
# Review.create(user: user2, product: product1, star_rating: 3, comment: 'It\'s ok.')

require_relative '../config/environment'

puts "Seeding data..."

10.times do
    Product.create(name: Faker::Name.name)
end

10.times do
    User.create(name: Faker::Name.name)
end


10.times do
    Review.create(
        star_rating: rand(1..10),
        comment: Faker::Lorem.sentence,
        product_id: rand(Product.first.id..Product.last.id),
        user_id: rand(User.first.id..User.last.id)
    )

end
puts "Done seeding"