require_relative '../config/environment'

puts "Creating authors..."

2.times do
    User.create(name: Faker::Name.name)
end

puts "Authors created successfully"

puts "Creating blogs..."

20.times do
    Blog.create(
    title: Faker::Book.title,
    content:Faker::Lorem.paragraph_by_chars(number: 300),
    user_id: rand(User.first.id..User.last.id)
)
end

puts "Blogs created successfully"

puts "Creating comments..."

5.times do
    Comment.create(
        comment: Faker::Lorem.paragraph_by_chars(number: 100),
        user_id: rand(User.first.id..User.last.id),
        blog_id: rand(Blog.first.id..Blog.last.id)
    )
end

puts "Comments created successfully"
