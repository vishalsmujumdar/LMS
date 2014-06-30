namespace :bookissues do
  desc "TODO"
  task reminder: :environment do
  	due_book_issues = Bookissue.find_issue_reminder
  	due_book_issues.each do |bookissue|
  		user = bookissue.user
  		book = bookissue.bookitem.book
  		UserMailer.send_reminder(user,book).deliver
  	end
  end
end
