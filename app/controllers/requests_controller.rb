class RequestsController < ApplicationController
  respond_to :json

  def index
    @requests = Request.all

    respond_with(@requests)
  end

  def show
    @request = Request.find(params[:id])

    respond_with(@request)
  end

  def create
    @request = Request.create(request_params)

    respond_with(@request)
  end

  def approve
    # TODO: Check if admin
    @request = Request.find(params[:id])
    @request.approve!

    #respond_with(@request)
    render json: @request
  end

  def deny
    # TODO: Check if admin
    @request = Request.find(params[:id])
    @request.deny!

    render json: @request
    #respond_with(@request)
  end

private

  def request_params
    params.require(:request).permit(:name, :medium, :artist, :external_id,
				    :external_id, :external_service, :year,
				    :rating, :art, :genres, :link,
				    :link_service, :audience_score,
				    :critics_score, :runtime)
  end
end
