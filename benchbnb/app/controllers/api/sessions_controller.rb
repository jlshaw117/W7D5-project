class Api::SessionsController < ApplicationController
  
  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
  
  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    
    if user
      login(user)
      render json: ["logged in"]
    else
      render json: ["invalid"], status: 418
    end
  end
  
  
  
end
