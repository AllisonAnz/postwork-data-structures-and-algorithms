// node questions/sizeValidation
//build a function that validates an array of images given size restriction
//1. Single Image Size Validation Prompt We offer customers is the ability to send text messages programmatically. With a simple line of code, you send a user either an sms (text based) or mms (media based) message. While sending and receiving images is a common use case for customers, there are data limits for the size of the images you send through text messages. We are asking you to build a function that validates an array of images given size restrictions.
// Given:
//• imageUrls: An array containing one or many 2 item arrays, the first element being a string url and the second being a string with the size of the image as bytes (example: [["https://foo.io/image/happydog", "10230230"], ["https://foo.io/image/sadpanda", "90023230230"]]
// • maxSize: A string representing the max size of the image ('10mb') or a string representing 'none' Write: • A function that checks the size of each image against the max size, and returns o An array of 2 item arrays, with the first element being the string url and the second being a string representation of the boolean value ('TRUE' or 'FALSE") • Example: [["https://foo.io/image/happydog", "TRUE"], ["https://foo.io/image/sadpanda", "FALSE"]] //• The output must be in the original order that the function received the urls. Max Size Conversion Please use the following conversion charts: Data Conversion 1 KB (1 kilobyte) 1000 bytes 1 MB (1 megabyte) 1000000 bytes 1 GB (1 gigabyte) 1000000000 bytes Constraints • The input imageUrls will have at minimum one element • The output must be in the original order of the urls that were received • The url will be represented as a string and will always be a valid url • The size of the image will be number of bytes represented as a string (example: '123') and always be a valid number greater than 0, with no upper limit. • The maxSize argument: o If it is 'none', it should default to '1 MB o Will include a number followed by the data unit of measurement (example: "2GB") o Will include the data unit of measurement, with options being 'KB', 'MB', and 'GB' o The data unit of measurement must be case insensitive ('1Mb' and '1mb' and '1MB' will give you the same results) o It will only need to account for whole numbers. It will always be a positive whole number (It WILL NEVER receive a number with a decimal point such as '1.2mb') 
// Example 
//  Input: [['https://svs.gsfc.nasa.gov/vis/a030000/a030800/a0 30877/frames/5760x3240_16x9_01p/BlackMarble_2016_92 8m_conus_labeled.png', '32000000']], '20MB 
//Output: [['https://svs.gsfc.nasa.gov/vis/a030000/a030800/20 30877/frames/5760x3240_16x9_01p/BlackMarble_2016_92 8m_conus_labeled.png', 'FALSE'11 
// Input: [['https://svs.gsfc.nasa.gov/vis/a030000/a030800/a0 30877/frames/5760x3240_16x9_01p/BlackMarble_2016_92 8m_conus_labeled.png', '32000000']], '40MB' 
// Output: [['https://svs.gsfc.nasa.gov/vis/a030000/a030800/a0 30877/frames/5760x3240_16x9_01p/BlackMarble_2016_92 8m_conus_labeled.png', 'TRUE']]

imageUrls = [["https://foo.io/image/happydog", "10230230"], ["https://foo.io/image/sadpanda", "90023230230"]]
imageSize = 'none'

function sizeValidation(imageUrls, maxSize) {
    const convertedSize = maxSize === 'none' ? sizeConversion("1MB") : sizeConversion(maxSize)
    //console.log(convertedSize)

    let newArr = imageUrls.filter(el => {
        if (el[1] <= convertedSize) {
            //console.log("T")
            el[1] = "TRUE"
        } else {
            //console.log("F")
            el[1] = "FALSE"
        }
        return imageUrls
    })
    return newArr

}

function sizeConversion(maxSize) {
    //console.log(maxSize)
    let bytes = maxSize.slice(-2).toLowerCase()
    const size = maxSize.replace(/[^\d.-]/g, '')
    if (bytes === "kb") {
        // 1 kb = 1000 bytes 
        return (size * 1000)
    } else if (bytes === "mb") {
        // 1 mb = 1000000
        return (size * 1000000)
    } else if (bytes === "gb") {
        // 1 gb = 1000000000
        return (size * 1000000000)
    }
    //console.log(maxSize)
}

result = sizeValidation(imageUrls, imageSize)
output = result.map(x => x.join(' ')).join('\n') + '\n'
console.log(output)
