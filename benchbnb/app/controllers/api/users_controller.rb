class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: ['Good Job!']
    else
      render json: @user.errors.full_messages, status: 418
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

# $.ajax({
#   method: 'POST',
#   url: 'api/session',
#   data: {
#     user: {
#       username: 'user1',
#       password: 'password'
#     }
#   } 
# })