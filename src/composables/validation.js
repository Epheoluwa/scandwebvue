import { required, alpha, numeric, helpers} from '@vuelidate/validators'

export default function useValidatefunction(){
    const rules = {
        name: { 
          required : helpers.withMessage('Please, provide required data', required), 
          alpha: helpers.withMessage('Product name must be an alphabet', alpha) 
          },
        sku: { 
          required : helpers.withMessage('Please, provide required data', required) 
          },
        price: { 
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product price must be a number', numeric)
         },
        prod_type: {
          required : helpers.withMessage('Please, provide required data', required)
          },
          size: {
            required : helpers.withMessage('Please, provide required data', required),
            numeric: helpers.withMessage('Product size must be a number', numeric)
            },
          weight: {
            required : helpers.withMessage('Please, provide required data', required),
            numeric: helpers.withMessage('Product weight must be a number', numeric)
            },
          height: {
            required : helpers.withMessage('Please, provide required data', required),
            numeric: helpers.withMessage('Product height must be a number', numeric)
            },
          width: {
            required : helpers.withMessage('Please, provide required data', required),
            numeric: helpers.withMessage('Product width must be a number', numeric)
            },
          length: {
            required : helpers.withMessage('Please, provide required data', required),
            numeric: helpers.withMessage('Product length must be a number', numeric)
            }
      }
    const rulesforDvd = {
        name: { 
          required : helpers.withMessage('Please, provide required data', required), 
          alpha: helpers.withMessage('Product name must be an alphabet', alpha) 
          },
        sku: { 
          required : helpers.withMessage('Please, provide required data', required) 
          },
        price: { 
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product price must be a number', numeric)
         },
        prod_type: {
          required : helpers.withMessage('Please, provide required data', required)
          },
        size: {
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product size must be a number', numeric)
          }
      }

      const rulesforBook = {
        name: { 
          required : helpers.withMessage('Please, provide required data', required), 
          alpha: helpers.withMessage('Product name must be an alphabet', alpha) 
          },
        sku: { 
          required : helpers.withMessage('Please, provide required data', required) 
          },
        price: { 
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product price must be a number', numeric)
         },
        prod_type: {
          required : helpers.withMessage('Please, provide required data', required)
          },
        weight: {
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product weight must be a number', numeric)
          }
      }
      const rulesforFurniture = {
        name: { 
          required : helpers.withMessage('Please, provide required data', required), 
          alpha: helpers.withMessage('Product name must be an alphabet', alpha) 
          },
        sku: { 
          required : helpers.withMessage('Please, provide required data', required) 
          },
        price: { 
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product price must be a number', numeric)
         },
        prod_type: {
          required : helpers.withMessage('Please, provide required data', required)
          },
        height: {
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product height must be a number', numeric)
          },
        width: {
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product width must be a number', numeric)
          },
        length: {
          required : helpers.withMessage('Please, provide required data', required),
          numeric: helpers.withMessage('Product length must be a number', numeric)
          }
      }

    return{
        rulesforDvd,
        rulesforBook,
        rulesforFurniture,
        rules
    }
}