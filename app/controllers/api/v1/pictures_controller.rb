class Api::V1::PicturesController < ApplicationController
  def index
    pictures = Picture.all
    render json: pictures
  end

  def show
    picture = Picture.find(params[:id])
    render json: picture
  end
end