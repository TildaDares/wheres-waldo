Character.delete_all
Picture.delete_all

data = {
  "In Town": {
    waldo: {name: "waldo", x_coord: 42.96, y_coord: 46.99},
    odlaw: {name: "odlaw", x_coord: 59, y_coord: 59},
    wenda: {name: "wenda", x_coord: 43.58, y_coord: 37.47},
    whitebeard: {name: "whitebeard", x_coord: 65.73, y_coord: 48.13},
  },

  "Ski Slopes": {
    waldo: {name: "waldo", x_coord: 85.5, y_coord: 45.75},
    odlaw: {name: "odlaw", x_coord: 31.78, y_coord: 40.16},
    wenda: {name: "wenda", x_coord: 48.96, y_coord: 26},
    whitebeard: {name: "whitebeard", x_coord: 7.03, y_coord: 47.82},
  }, 

  "On the Beach": {
    waldo: {name: "waldo", x_coord: 61.8, y_coord: 24.12},
    odlaw: {name: "odlaw", x_coord: 10.86, y_coord: 22.77},
    wenda: {name: "wenda", x_coord: 77.12, y_coord: 26.29},
    whitebeard: {name: "whitebeard", x_coord: 27.01, y_coord: 22.67},
  }
}

data.each do |key, value|
  picture = Picture.create(name: key)
  picture.characters.create(data[key][:waldo])
  picture.characters.create(data[key][:odlaw])
  picture.characters.create(data[key][:wenda])
  picture.characters.create(data[key][:whitebeard])
end