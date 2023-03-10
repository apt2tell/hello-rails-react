class Api::RandomController < Api::ApplicationController
  def index
    @message = Message.order('RANDOM()').limit(1).first
    render json: @message
  end
end
