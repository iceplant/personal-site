/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createPlant = /* GraphQL */ `
  mutation CreatePlant(
    $input: CreatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    createPlant(input: $input, condition: $condition) {
      id
      name
      description
      image
      species
      featured
      price
      orders {
        items {
          id
          plant_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
      id
      name
      description
      image
      species
      featured
      price
      orders {
        items {
          id
          plant_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
      id
      name
      description
      image
      species
      featured
      price
      orders {
        items {
          id
          plant_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlantOrder = /* GraphQL */ `
  mutation CreatePlantOrder(
    $input: CreatePlantOrderInput!
    $condition: ModelPlantOrderConditionInput
  ) {
    createPlantOrder(input: $input, condition: $condition) {
      id
      plant_id
      order_id
      order {
        id
        user
        date
        total
        plants {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      plant {
        id
        name
        description
        image
        species
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const updatePlantOrder = /* GraphQL */ `
  mutation UpdatePlantOrder(
    $input: UpdatePlantOrderInput!
    $condition: ModelPlantOrderConditionInput
  ) {
    updatePlantOrder(input: $input, condition: $condition) {
      id
      plant_id
      order_id
      order {
        id
        user
        date
        total
        plants {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      plant {
        id
        name
        description
        image
        species
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const deletePlantOrder = /* GraphQL */ `
  mutation DeletePlantOrder(
    $input: DeletePlantOrderInput!
    $condition: ModelPlantOrderConditionInput
  ) {
    deletePlantOrder(input: $input, condition: $condition) {
      id
      plant_id
      order_id
      order {
        id
        user
        date
        total
        plants {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      plant {
        id
        name
        description
        image
        species
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      plants {
        items {
          id
          plant_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      plants {
        items {
          id
          plant_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      plants {
        items {
          id
          plant_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
