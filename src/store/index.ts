import { createStore } from 'vuex'

const hoteles = () => {
    return [
        {
            "id": 1,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/1",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel3_2.png",
            "name": "Hotel 3 stars",
            "attributes": {
              "rarity": 3,
              "rooms": 12,
              "staff": 6
            }
          },
          {
            "id": 2,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/2",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel4_1.png",
            "name": "Hotel 4 stars",
            "attributes": {
              "rarity": 4,
              "rooms": 15,
              "staff": 8
            }
          },
          {
            "id": 3,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/3",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel1_2.png",
            "name": "Hotel 1 stars",
            "attributes": {
              "rarity": 1,
              "rooms": 5,
              "staff": 3
            }
          },
          {
            "id": 4,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/4",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel5_1.png",
            "name": "Hotel 5 stars",
            "attributes": {
              "rarity": 5,
              "rooms": 20,
              "staff": 10
            }
          },
          {
            "id": 5,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/5",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel3_2.png",
            "name": "Hotel 3 stars",
            "attributes": {
              "rarity": 3,
              "rooms": 12,
              "staff": 6
            }
          },
          {
            "id": 6,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/6",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel4_1.png",
            "name": "Hotel 4 stars",
            "attributes": {
              "rarity": 4,
              "rooms": 15,
              "staff": 8
            }
          },
          {
            "id": 7,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/7",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel1_2.png",
            "name": "Hotel 1 stars",
            "attributes": {
              "rarity": 1,
              "rooms": 5,
              "staff": 3
            }
          },
          {
            "id": 8,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/8",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel5_1.png",
            "name": "Hotel 5 stars",
            "attributes": {
              "rarity": 5,
              "rooms": 20,
              "staff": 10
            }
          },
          {
            "id": 9,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/9",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel3_2.png",
            "name": "Hotel 3 stars",
            "attributes": {
              "rarity": 3,
              "rooms": 12,
              "staff": 6
            }
          },
          {
            "id": 10,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/10",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel4_1.png",
            "name": "Hotel 4 stars",
            "attributes": {
              "rarity": 4,
              "rooms": 15,
              "staff": 8
            }
          },
          {
            "id": 11,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/11",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel1_2.png",
            "name": "Hotel 1 stars",
            "attributes": {
              "rarity": 1,
              "rooms": 5,
              "staff": 3
            }
          },
          {
            "id": 12,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/12",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel5_1.png",
            "name": "Hotel 5 stars",
            "attributes": {
              "rarity": 5,
              "rooms": 20,
              "staff": 10
            }
          },
          {
            "id": 13,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/13",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel3_1.png",
            "name": "Hotel 3 stars",
            "attributes": {
              "rarity": 3,
              "rooms": 12,
              "staff": 6
            }
          },
          {
            "id": 14,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/14",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel4_1.png",
            "name": "Hotel 4 stars",
            "attributes": {
              "rarity": 4,
              "rooms": 15,
              "staff": 8
            }
          },
          {
            "id": 15,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/15",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel1_1.png",
            "name": "Hotel 1 stars",
            "attributes": {
              "rarity": 1,
              "rooms": 5,
              "staff": 3
            }
          },
          {
            "id": 16,
            "description": "NFT of paradise",
            "external_url": "https://jedi.paradisehotelnft.com/hotel/16",
            "image": "https://assetsparadise.s3.sa-east-1.amazonaws.com/hotels/Hotel5_2.png",
            "name": "Hotel 5 stars",
            "attributes": {
              "rarity": 5,
              "rooms": 20,
              "staff": 10
            }
          }
    ]
}

const store = createStore({
    state () {
        return {
            hoteles: hoteles(),
            filter: {
                query: '',
            }
        }
    },
    
    mutations: {

        SET_QUERY (state, query:string) {
            state.filter.query = query
        }
    },
    getters:{
        filteredHoteles (state){                      
            if (state.filter.query.length > 0) {
                return state.hoteles.filter(
                  hotel => hotel.name
                  .toLowerCase()
                  .includes(state.filter.query.toLowerCase())
                )                
            } 
            return state.hoteles
        }
    }
})

export default store