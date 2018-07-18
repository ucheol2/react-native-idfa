import { NativeModules } from 'react-native';

const { PTRIDFA } = NativeModules;

const getIDFA = PTRIDFA.getIDFA;

export { getIDFA };
