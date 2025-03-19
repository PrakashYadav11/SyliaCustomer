import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: heightPixel(10),
  },
  totalProduct: {
    height: heightPixel(48),
    width: widthPixel(375),
    marginLeft:widthPixel(10),
    marginTop:heightPixel(10)
  },
  tx: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  resultBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filter: {
    justifyContent: 'center',
    backgroundColor: '#F3F0F0',
    height: heightPixel(48),
    width: widthPixel(118),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius:10
  },
  filterTxt: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: widthPixel(10),
  },
});
