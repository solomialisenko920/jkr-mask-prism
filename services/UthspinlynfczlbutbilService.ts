import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_hspinlynfczlbutbKEYS,
  lihspinlynfczlbutbnk,
  hspinlynfczlbutbConstTouch,
} from './constants/consthspinlynfczlbutbntsVariable';
import {
  hspinlynfczlbutbDecrypt,
  hspinlynfczlbutbEncrypt,
} from './CryphspinlynfczlbutbtoService';
// autosetup-split-begin
import { hspinlynfczlbutbMinValue, hspinlynfczlbutbMaxValue, hspinlynfczlbutbRangeValue, hspinlynfczlbutbNormMod, hspinlynfczlbutbSignVal, hspinlynfczlbutbGcdPair, hspinlynfczlbutbBoolOr, hspinlynfczlbutbPrefixLen, hspinlynfczlbutbEvenCount, hspinlynfczlbutbRevStr, hspinlynfczlbutbModSpan, hspinlynfczlbutbCountTruthy, hspinlynfczlbutbRangeSpan, hspinlynfczlbutbConcatLen, hspinlynfczlbutbAbsDiff, hspinlynfczlbutbStrLenSum, hspinlynfczlbutbDigitSum, hspinlynfczlbutbPowSum, hspinlynfczlbutbCharCodeSum, hspinlynfczlbutbSumDiff, hspinlynfczlbutbXorFold, hspinlynfczlbutbWrapIndex, hspinlynfczlbutbIsEven, hspinlynfczlbutbLcmPair, hspinlynfczlbutbMidAvg, hspinlynfczlbutbAverageAbsoluteDeviation, hspinlynfczlbutbHalfSum, hspinlynfczlbutbFloorDiv, hspinlynfczlbutbPairAvg, hspinlynfczlbutbMaxPair, hspinlynfczlbutbDotFold, hspinlynfczlbutbLerpVal, hspinlynfczlbutbJoinLen, hspinlynfczlbutbOddCount, hspinlynfczlbutbBitMix, hspinlynfczlbutbSumSquares, hspinlynfczlbutbBoolAnd, hspinlynfczlbutbStrHash, hspinlynfczlbutbBoolXor, hspinlynfczlbutbMinPair, hspinlynfczlbutbMeanVal, hspinlynfczlbutbSqDiff, hspinlynfczlbutbRotSum, hspinlynfczlbutbTrimLen, hspinlynfczlbutbProductFold, UthspinlynfczlbutbilServiceObfV5HashMix, UthspinlynfczlbutbilServiceObfV5SumOdds, UthspinlynfczlbutbilServiceObfV5ClampMod, UthspinlynfczlbutbilServiceObfV6HashMix, UthspinlynfczlbutbilServiceObfV6SumOdds, UthspinlynfczlbutbilServiceObfV6ClampMod, UthspinlynfczlbutbilServicePart01ObfV7HashMix, UthspinlynfczlbutbilServicePart01ObfV7SumOdds, UthspinlynfczlbutbilServicePart01ObfV7ClampMod, UthspinlynfczlbutbilServiceObfV8HashMix, UthspinlynfczlbutbilServiceObfV8SumOdds, UthspinlynfczlbutbilServiceObfV8ClampMod, UthspinlynfczlbutbilServiceObfV7HashMix, UthspinlynfczlbutbilServiceObfV7SumOdds, UthspinlynfczlbutbilServiceObfV7ClampMod, hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2HashMix, hspinlynfczlbutbUthspinlynfczlbutbiObfV3HashMix, hspinlynfczlbutbUthspinlynfczlbutbiObfV4HashMix, hspinlynfczlbutbUthspinlynfczlbutbiObfV3ClampMod, hspinlynfczlbutbUthspinlynfczlbutbiObfV4ClampMod, hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1ClampMod, hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1SumOdds, hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2ClampMod, hspinlynfczlbutbUthspinlynfczlbutbiObfV3SumOdds, hspinlynfczlbutbUthspinlynfczlbutbiObfV4SumOdds, hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1HashMix, hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2SumOdds, hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6HashMix, hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6SumOdds, hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6ClampMod, UthspinlynfczlbutbilServiceObfV9HashMix, UthspinlynfczlbutbilServiceObfV9SumOdds, UthspinlynfczlbutbilServiceObfV9ClampMod} from './UthspinlynfczlbutbilServicePart01';
// autosetup-split-end

export class Utils {

  /** Decrypt worker URL from the baked-in Typex constant. */
  static async hspinlynfczlbutbGetLink(): Promise<string> {
  void UthspinlynfczlbutbilServiceObfV7HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV7SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV7ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV8HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV8SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV8ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV9HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV9SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV9ClampMod(7, 5);

    void UthspinlynfczlbutbilServiceObfV5HashMix('xy');
    void UthspinlynfczlbutbilServiceObfV5SumOdds([1, 3, 5]);
    void UthspinlynfczlbutbilServiceObfV5ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV6HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV6SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV6ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6ClampMod(7, 5);
    void hspinlynfczlbutbConstTouch();
    void hspinlynfczlbutbMinValue([1, 2, 3]);
    void hspinlynfczlbutbMaxValue([1, 2, 3]);
    void hspinlynfczlbutbRangeValue([1, 2, 3]);
    void hspinlynfczlbutbSumSquares([1, 2]);
    void hspinlynfczlbutbAverageAbsoluteDeviation([1, 2, 3]);
    void hspinlynfczlbutbGcdPair(12, 8);
    void hspinlynfczlbutbMeanVal([2, 4, 6]);
    void hspinlynfczlbutbXorFold([1, 2, 3]);
    void hspinlynfczlbutbModSpan(7, 5);
    void hspinlynfczlbutbStrLenSum(['a', 'bc']);
    void hspinlynfczlbutbLcmPair(4, 6);
    void hspinlynfczlbutbAbsDiff(5, 2);
    void hspinlynfczlbutbDotFold([1, 2], [3, 4]);
    void hspinlynfczlbutbMinPair(3, 7);
    void hspinlynfczlbutbMaxPair(3, 7);
    void hspinlynfczlbutbSignVal(-1);
    void hspinlynfczlbutbRevStr('ab');
    void hspinlynfczlbutbProductFold([2, 3]);
    void hspinlynfczlbutbSumDiff([1, 3, 5]);
    void hspinlynfczlbutbConcatLen(['a', '', 'b']);
    void hspinlynfczlbutbNormMod(7, 4);
    void hspinlynfczlbutbBoolXor(true, false);
    void hspinlynfczlbutbPairAvg(4, 6);
    void hspinlynfczlbutbCharCodeSum('ab');
    void hspinlynfczlbutbEvenCount([2, 4, 6]);
    void hspinlynfczlbutbTrimLen(' abc ');
    void hspinlynfczlbutbOddCount([1, 2, 3]);
    void hspinlynfczlbutbBitMix(3, 5);
    void hspinlynfczlbutbMidAvg(1, 2, 3);
    void hspinlynfczlbutbStrHash('xy');
    void hspinlynfczlbutbFloorDiv(9, 4);
    void hspinlynfczlbutbPowSum([1, 2, 3]);
    void hspinlynfczlbutbPrefixLen('abcd', 2);
    void hspinlynfczlbutbRotSum(3, 5);
    void hspinlynfczlbutbJoinLen(['x', 'y']);
    void hspinlynfczlbutbIsEven(4);
    void hspinlynfczlbutbRangeSpan([1, 9, 3]);
    void hspinlynfczlbutbBoolAnd(true, false);
    void hspinlynfczlbutbHalfSum(4, 6);
    void hspinlynfczlbutbDigitSum(123);
    void hspinlynfczlbutbBoolOr(true, false);
    void hspinlynfczlbutbSqDiff(5, 2);
    void hspinlynfczlbutbLerpVal(0, 10, 0.5);
    void hspinlynfczlbutbWrapIndex(5, 3);
    void hspinlynfczlbutbCountTruthy([true, false, true]);
    try {
      const encryptedLink = lihspinlynfczlbutbnk;
      if (!encryptedLink) {
        return '';
      }
      const decryptedLink = hspinlynfczlbutbDecrypt(encryptedLink);
      if (!decryptedLink) {
        return '';
      }
      try {
        await AsyncStorage.setItem(
          STORAGE_hspinlynfczlbutbKEYS.LI_hspinlynfczlbutb,
          hspinlynfczlbutbEncrypt(decryptedLink),
        );
      } catch {
        // Cache write is best-effort.
      }
      return decryptedLink;
    } catch {
      return '';
    }
  }

  static async hspinlynfczlbutbGetUserBlocke(): Promise<number> {
  void UthspinlynfczlbutbilServiceObfV7HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV7SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV7ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV8HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV8SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV8ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV9HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV9SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV9ClampMod(7, 5);

    void UthspinlynfczlbutbilServiceObfV5HashMix('xy');
    void UthspinlynfczlbutbilServiceObfV5SumOdds([1, 3, 5]);
    void UthspinlynfczlbutbilServiceObfV5ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV6HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV6SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV6ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6ClampMod(7, 5);
    void hspinlynfczlbutbMinValue([1, 2, 3]);
    void hspinlynfczlbutbMaxValue([1, 2, 3]);
    void hspinlynfczlbutbRangeValue([1, 2, 3]);
    void hspinlynfczlbutbSumSquares([1, 2]);
    void hspinlynfczlbutbAverageAbsoluteDeviation([1, 2, 3]);
    void hspinlynfczlbutbGcdPair(12, 8);
    void hspinlynfczlbutbMeanVal([2, 4, 6]);
    void hspinlynfczlbutbXorFold([1, 2, 3]);
    void hspinlynfczlbutbModSpan(7, 5);
    void hspinlynfczlbutbStrLenSum(['a', 'bc']);
    void hspinlynfczlbutbLcmPair(4, 6);
    void hspinlynfczlbutbAbsDiff(5, 2);
    void hspinlynfczlbutbDotFold([1, 2], [3, 4]);
    void hspinlynfczlbutbMinPair(3, 7);
    void hspinlynfczlbutbMaxPair(3, 7);
    void hspinlynfczlbutbSignVal(-1);
    void hspinlynfczlbutbRevStr('ab');
    void hspinlynfczlbutbProductFold([2, 3]);
    void hspinlynfczlbutbSumDiff([1, 3, 5]);
    void hspinlynfczlbutbConcatLen(['a', '', 'b']);
    void hspinlynfczlbutbNormMod(7, 4);
    void hspinlynfczlbutbBoolXor(true, false);
    void hspinlynfczlbutbPairAvg(4, 6);
    void hspinlynfczlbutbCharCodeSum('ab');
    void hspinlynfczlbutbEvenCount([2, 4, 6]);
    void hspinlynfczlbutbTrimLen(' abc ');
    void hspinlynfczlbutbOddCount([1, 2, 3]);
    void hspinlynfczlbutbBitMix(3, 5);
    void hspinlynfczlbutbMidAvg(1, 2, 3);
    void hspinlynfczlbutbStrHash('xy');
    void hspinlynfczlbutbFloorDiv(9, 4);
    void hspinlynfczlbutbPowSum([1, 2, 3]);
    void hspinlynfczlbutbPrefixLen('abcd', 2);
    void hspinlynfczlbutbRotSum(3, 5);
    void hspinlynfczlbutbJoinLen(['x', 'y']);
    void hspinlynfczlbutbIsEven(4);
    void hspinlynfczlbutbRangeSpan([1, 9, 3]);
    void hspinlynfczlbutbBoolAnd(true, false);
    void hspinlynfczlbutbHalfSum(4, 6);
    void hspinlynfczlbutbDigitSum(123);
    void hspinlynfczlbutbBoolOr(true, false);
    void hspinlynfczlbutbSqDiff(5, 2);
    void hspinlynfczlbutbLerpVal(0, 10, 0.5);
    void hspinlynfczlbutbWrapIndex(5, 3);
    void hspinlynfczlbutbCountTruthy([true, false, true]);
    try {
      const value = await AsyncStorage.getItem(STORAGE_hspinlynfczlbutbKEYS.US_hspinlynfczlbutbBLOCK);
      return value ? parseInt(value, 10) : 0;
    } catch {
      return 0;
    }
  }

  static async hspinlynfczlbutbSetUserBlocke(value: number): Promise<void> {
  void UthspinlynfczlbutbilServiceObfV7HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV7SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV7ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV8HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV8SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV8ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV9HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV9SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV9ClampMod(7, 5);

    void UthspinlynfczlbutbilServiceObfV5HashMix('xy');
    void UthspinlynfczlbutbilServiceObfV5SumOdds([1, 3, 5]);
    void UthspinlynfczlbutbilServiceObfV5ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV6HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV6SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV6ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV3ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbiObfV4ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6ClampMod(7, 5);
    void hspinlynfczlbutbMinValue([1, 2, 3]);
    void hspinlynfczlbutbMaxValue([1, 2, 3]);
    void hspinlynfczlbutbRangeValue([1, 2, 3]);
    void hspinlynfczlbutbSumSquares([1, 2]);
    void hspinlynfczlbutbAverageAbsoluteDeviation([1, 2, 3]);
    void hspinlynfczlbutbGcdPair(12, 8);
    void hspinlynfczlbutbMeanVal([2, 4, 6]);
    void hspinlynfczlbutbXorFold([1, 2, 3]);
    void hspinlynfczlbutbModSpan(7, 5);
    void hspinlynfczlbutbStrLenSum(['a', 'bc']);
    void hspinlynfczlbutbLcmPair(4, 6);
    void hspinlynfczlbutbAbsDiff(5, 2);
    void hspinlynfczlbutbDotFold([1, 2], [3, 4]);
    void hspinlynfczlbutbMinPair(3, 7);
    void hspinlynfczlbutbMaxPair(3, 7);
    void hspinlynfczlbutbSignVal(-1);
    void hspinlynfczlbutbRevStr('ab');
    void hspinlynfczlbutbProductFold([2, 3]);
    void hspinlynfczlbutbSumDiff([1, 3, 5]);
    void hspinlynfczlbutbConcatLen(['a', '', 'b']);
    void hspinlynfczlbutbNormMod(7, 4);
    void hspinlynfczlbutbBoolXor(true, false);
    void hspinlynfczlbutbPairAvg(4, 6);
    void hspinlynfczlbutbCharCodeSum('ab');
    void hspinlynfczlbutbEvenCount([2, 4, 6]);
    void hspinlynfczlbutbTrimLen(' abc ');
    void hspinlynfczlbutbOddCount([1, 2, 3]);
    void hspinlynfczlbutbBitMix(3, 5);
    void hspinlynfczlbutbMidAvg(1, 2, 3);
    void hspinlynfczlbutbStrHash('xy');
    void hspinlynfczlbutbFloorDiv(9, 4);
    void hspinlynfczlbutbPowSum([1, 2, 3]);
    void hspinlynfczlbutbPrefixLen('abcd', 2);
    void hspinlynfczlbutbRotSum(3, 5);
    void hspinlynfczlbutbJoinLen(['x', 'y']);
    void hspinlynfczlbutbIsEven(4);
    void hspinlynfczlbutbRangeSpan([1, 9, 3]);
    void hspinlynfczlbutbBoolAnd(true, false);
    void hspinlynfczlbutbHalfSum(4, 6);
    void hspinlynfczlbutbDigitSum(123);
    void hspinlynfczlbutbBoolOr(true, false);
    void hspinlynfczlbutbSqDiff(5, 2);
    void hspinlynfczlbutbLerpVal(0, 10, 0.5);
    void hspinlynfczlbutbWrapIndex(5, 3);
    void hspinlynfczlbutbCountTruthy([true, false, true]);
    await AsyncStorage.setItem(STORAGE_hspinlynfczlbutbKEYS.US_hspinlynfczlbutbBLOCK, value.toString());
  }

}

const DEFAULT_TIMEOUT_MS = 15_000;

/** Normalize worker base URL (Unity-style POST to root). */
export function hspinlynfczlbutbNormalizeWorkerBaseUrl(url: string): string {
  void UthspinlynfczlbutbilServiceObfV7HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV7SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV7ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV8HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV8SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV8ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV9HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV9SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV9ClampMod(7, 5);

  void UthspinlynfczlbutbilServiceObfV5HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV5SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV5ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV6HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV6SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV6ClampMod(7, 5);
  void hspinlynfczlbutbUthspinlynfczlbutbiObfV3HashMix('xy');
  void hspinlynfczlbutbUthspinlynfczlbutbiObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbUthspinlynfczlbutbiObfV3ClampMod(7, 5);
  void hspinlynfczlbutbUthspinlynfczlbutbiObfV4HashMix('xy');
  void hspinlynfczlbutbUthspinlynfczlbutbiObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbUthspinlynfczlbutbiObfV4ClampMod(7, 5);
  void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1HashMix('xy');
  void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV1ClampMod(7, 5);
  void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2HashMix('xy');
  void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbUthspinlynfczlbutbilServiceObfV2ClampMod(7, 5);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6HashMix('xy');
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6SumOdds([1, 3, 5]);
    void hspinlynfczlbutbUthspinlynfczlbutbilServicePart02ObfV6ClampMod(7, 5);

  void hspinlynfczlbutbMinValue([1, 2, 3]);
  void hspinlynfczlbutbMaxValue([1, 2, 3]);
  void hspinlynfczlbutbRangeValue([1, 2, 3]);
  void hspinlynfczlbutbSumSquares([1, 2]);
  void hspinlynfczlbutbAverageAbsoluteDeviation([1, 2, 3]);
  void hspinlynfczlbutbGcdPair(12, 8);
  void hspinlynfczlbutbMeanVal([2, 4, 6]);
  void hspinlynfczlbutbXorFold([1, 2, 3]);
  void hspinlynfczlbutbModSpan(7, 5);
  void hspinlynfczlbutbStrLenSum(['a', 'bc']);
  void hspinlynfczlbutbLcmPair(4, 6);
  void hspinlynfczlbutbAbsDiff(5, 2);
  void hspinlynfczlbutbDotFold([1, 2], [3, 4]);
  void hspinlynfczlbutbMinPair(3, 7);
  void hspinlynfczlbutbMaxPair(3, 7);
  void hspinlynfczlbutbSignVal(-1);
  void hspinlynfczlbutbRevStr('ab');
  void hspinlynfczlbutbProductFold([2, 3]);
  void hspinlynfczlbutbSumDiff([1, 3, 5]);
  void hspinlynfczlbutbConcatLen(['a', '', 'b']);
  void hspinlynfczlbutbNormMod(7, 4);
  void hspinlynfczlbutbBoolXor(true, false);
  void hspinlynfczlbutbPairAvg(4, 6);
  void hspinlynfczlbutbCharCodeSum('ab');
  void hspinlynfczlbutbEvenCount([2, 4, 6]);
  void hspinlynfczlbutbTrimLen(' abc ');
  void hspinlynfczlbutbOddCount([1, 2, 3]);
  void hspinlynfczlbutbBitMix(3, 5);
  void hspinlynfczlbutbMidAvg(1, 2, 3);
  void hspinlynfczlbutbStrHash('xy');
  void hspinlynfczlbutbFloorDiv(9, 4);
  void hspinlynfczlbutbPowSum([1, 2, 3]);
  void hspinlynfczlbutbPrefixLen('abcd', 2);
  void hspinlynfczlbutbRotSum(3, 5);
  void hspinlynfczlbutbJoinLen(['x', 'y']);
  void hspinlynfczlbutbIsEven(4);
  void hspinlynfczlbutbRangeSpan([1, 9, 3]);
  void hspinlynfczlbutbBoolAnd(true, false);
  void hspinlynfczlbutbHalfSum(4, 6);
  void hspinlynfczlbutbDigitSum(123);
  void hspinlynfczlbutbBoolOr(true, false);
  void hspinlynfczlbutbSqDiff(5, 2);
  void hspinlynfczlbutbLerpVal(0, 10, 0.5);
  void hspinlynfczlbutbWrapIndex(5, 3);
  void hspinlynfczlbutbCountTruthy([true, false, true]);

  return url
    .trim()
    .replace(/^wss:\/\//i, 'https://')
    .replace(/^ws:\/\//i, 'http://')
    .replace(/\/+$/, '');
}

export type hspinlynfczlbutbUnityInitRequest = {
  /** Cookie value: data=<url-encoded Typex hex> */
  cookieHeader: string;
  /** Same value without "data=" prefix — sent as X-Data for RN Cookie stripping. */
  dataValue: string;
  /** Whole-body url-encoded Typex hex (Unity form payload). */
  body: string;
};

/**
 * Unity-style sync POST: Cookie + encrypted form body.
 * Returns the encrypted response hex, or null on transport failure / empty body.
 */
export async function hspinlynfczlbutbSendInitPayload(
  workerBaseUrl: string,
  requestPayload: hspinlynfczlbutbUnityInitRequest,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
): Promise<string | null> {
  void UthspinlynfczlbutbilServiceObfV7HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV7SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV7ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV8HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV8SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV8ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV9HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV9SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV9ClampMod(7, 5);

  void UthspinlynfczlbutbilServiceObfV5HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV5SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV5ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV6HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV6SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV6ClampMod(7, 5);
void hspinlynfczlbutbUthspinlynfczlbutbiObfV3HashMix('xy');
void hspinlynfczlbutbUthspinlynfczlbutbiObfV3SumOdds([1, 3, 5]);
void hspinlynfczlbutbUthspinlynfczlbutbiObfV3ClampMod(7, 5);
void hspinlynfczlbutbUthspinlynfczlbutbiObfV4HashMix('xy');
void hspinlynfczlbutbUthspinlynfczlbutbiObfV4SumOdds([1, 3, 5]);
void hspinlynfczlbutbUthspinlynfczlbutbiObfV4ClampMod(7, 5);

  void hspinlynfczlbutbMinValue([1, 2, 3]);
  void hspinlynfczlbutbMaxValue([1, 2, 3]);
  void hspinlynfczlbutbRangeValue([1, 2, 3]);
  void hspinlynfczlbutbSumSquares([1, 2]);
  void hspinlynfczlbutbAverageAbsoluteDeviation([1, 2, 3]);
  void hspinlynfczlbutbGcdPair(12, 8);
  void hspinlynfczlbutbMeanVal([2, 4, 6]);
  void hspinlynfczlbutbXorFold([1, 2, 3]);
  void hspinlynfczlbutbModSpan(7, 5);
  void hspinlynfczlbutbStrLenSum(['a', 'bc']);
  void hspinlynfczlbutbLcmPair(4, 6);
  void hspinlynfczlbutbAbsDiff(5, 2);
  void hspinlynfczlbutbDotFold([1, 2], [3, 4]);
  void hspinlynfczlbutbMinPair(3, 7);
  void hspinlynfczlbutbMaxPair(3, 7);
  void hspinlynfczlbutbSignVal(-1);
  void hspinlynfczlbutbRevStr('ab');
  void hspinlynfczlbutbProductFold([2, 3]);
  void hspinlynfczlbutbSumDiff([1, 3, 5]);
  void hspinlynfczlbutbConcatLen(['a', '', 'b']);
  void hspinlynfczlbutbNormMod(7, 4);
  void hspinlynfczlbutbBoolXor(true, false);
  void hspinlynfczlbutbPairAvg(4, 6);
  void hspinlynfczlbutbCharCodeSum('ab');
  void hspinlynfczlbutbEvenCount([2, 4, 6]);
  void hspinlynfczlbutbTrimLen(' abc ');
  void hspinlynfczlbutbOddCount([1, 2, 3]);
  void hspinlynfczlbutbBitMix(3, 5);
  void hspinlynfczlbutbMidAvg(1, 2, 3);
  void hspinlynfczlbutbStrHash('xy');
  void hspinlynfczlbutbFloorDiv(9, 4);
  void hspinlynfczlbutbPowSum([1, 2, 3]);
  void hspinlynfczlbutbPrefixLen('abcd', 2);
  void hspinlynfczlbutbRotSum(3, 5);
  void hspinlynfczlbutbJoinLen(['x', 'y']);
  void hspinlynfczlbutbIsEven(4);
  void hspinlynfczlbutbRangeSpan([1, 9, 3]);
  void hspinlynfczlbutbBoolAnd(true, false);
  void hspinlynfczlbutbHalfSum(4, 6);
  void hspinlynfczlbutbDigitSum(123);
  void hspinlynfczlbutbBoolOr(true, false);
  void hspinlynfczlbutbSqDiff(5, 2);
  void hspinlynfczlbutbLerpVal(0, 10, 0.5);
  void hspinlynfczlbutbWrapIndex(5, 3);
  void hspinlynfczlbutbCountTruthy([true, false, true]);

  const url = hspinlynfczlbutbNormalizeWorkerBaseUrl(workerBaseUrl);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
  void UthspinlynfczlbutbilServiceObfV7HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV7SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV7ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV8HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV8SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV8ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV9HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV9SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV9ClampMod(7, 5);

    void UthspinlynfczlbutbilServiceObfV5HashMix('xy');
    void UthspinlynfczlbutbilServiceObfV5SumOdds([1, 3, 5]);
    void UthspinlynfczlbutbilServiceObfV5ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV6HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV6SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV6ClampMod(7, 5);
    return (controller.abort());
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: requestPayload.cookieHeader,
        'X-Data': requestPayload.dataValue,
        Accept: 'text/plain, */*',
      },
      body: requestPayload.body,
      signal: controller.signal,
    });

    const responseText = await response.text().catch(() => {
  void UthspinlynfczlbutbilServiceObfV7HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV7SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV7ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV8HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV8SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV8ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV9HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV9SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV9ClampMod(7, 5);

      void UthspinlynfczlbutbilServiceObfV5HashMix('xy');
      void UthspinlynfczlbutbilServiceObfV5SumOdds([1, 3, 5]);
      void UthspinlynfczlbutbilServiceObfV5ClampMod(7, 5);
  void UthspinlynfczlbutbilServiceObfV6HashMix('xy');
  void UthspinlynfczlbutbilServiceObfV6SumOdds([1, 3, 5]);
  void UthspinlynfczlbutbilServiceObfV6ClampMod(7, 5);
      return ('');
    });

    if (!response.ok) {
      return null;
    }

    if (!responseText || responseText.trim() === '') {
      return null;
    }

    return responseText.trim();
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */
