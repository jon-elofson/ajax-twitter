json.array!(@users) do |user|
  json.(user, *User.column_names)
  # Hidden N+1 query!
  debugger
  json.followed(current_user.follows?(user))
end
