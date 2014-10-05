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
end
