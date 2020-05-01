require 'band_pass_filter'

describe 'band_pass_filter()' do
  describe 'one sound' do
    it 'returns the one sound if within limits 30 and 50' do
      expect(band_pass_filter([45], 30, 50)). to eq [45]
    end

    it 'returns lower limit if below lower limit of 30' do
      expect(band_pass_filter([25], 30, 50)). to eq [30]
    end

    it 'returns upper limit if above upper limit of 50' do
      expect(band_pass_filter([55], 30, 50)). to eq [50]
    end

    it 'returns the one sound if within limit of 50 and 80' do
      expect(band_pass_filter([60], 55, 80)). to eq [60]
    end

    it 'returns lower limit if below lower limit of 50' do
      expect(band_pass_filter([45], 55, 80)). to eq [55]
    end

    it 'returns upper limit if above upper limit of 80' do
      expect(band_pass_filter([85], 55, 80)). to eq [80]
    end
  end

  describe 'two sounds' do
    it 'returns the lower limit sound if below limit' do
      expect(band_pass_filter([5,36], 25, 55)). to eq [25, 36]
    end

    it 'returns the upper limit sound if above limit' do
      expect(band_pass_filter([25,70], 25, 55)). to eq [25, 55]
    end
  end
end

