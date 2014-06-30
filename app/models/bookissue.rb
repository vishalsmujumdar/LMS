class Bookissue < ActiveRecord::Base
  belongs_to :user
  belongs_to :bookitem

  def self.find_issue_reminder
  	active_book_issues = where(status: true)
  	due_book_issues = active_book_issues.select { |issue| 
  						(issue.date_of_return.to_datetime() - Date.today) > 25
  					}
  end




end

#rails g model Bookissue user:references bookitem:references date_of_issue:datetime date_of_return:datetime