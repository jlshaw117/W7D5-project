class Api::SessionsController < ApplicationController
  
  def destroy 
    if current_user
      logout
      render json: {}
    else
      render json: status: 404
    end
  end
  
  
end
