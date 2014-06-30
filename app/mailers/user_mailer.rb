class UserMailer < ActionMailer::Base
  default from: "admin@librarymanager.com"

  def registration_confirmation(user)
  	@user = user
    mail(:to => user.email, :subject => "Registered")
  end

  def send_reminder(user,book)
  	@user = user
  	@book = book

  	mail(:to => @user.email, :subject => "Reminder of Book Issue")
  end

end
