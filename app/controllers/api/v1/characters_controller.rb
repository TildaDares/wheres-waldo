class Api::V1::CharactersController < ApplicationController
  def index
    picture = Picture.find(params[:picture_id])
    characters = picture.characters.all
    render json: characters
  end

  def show
    character = Character.find(params[:id])
    render json: character
  end
end