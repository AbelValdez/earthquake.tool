import axios, { AxiosResponse } from 'axios';
import getEarthquakes, { UrlFilter } from './EarthquakeService';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

beforeAll(() => {
  axiosMock.create = jest.fn(() => axiosMock);
});

describe('Earthquake service', () => {

  it('should url contains  UrlFilter.all', async () => {    
    axiosMock.get.mockResolvedValue({
      data: { features: {} },
    } as AxiosResponse);

    await getEarthquakes();
    expect(axiosMock.get.mock.calls[0][0]).toContain(UrlFilter.all);    
  });

  it('should url contains  UrlFilter.magnitude_1_0', async () => {    
    axiosMock.get.mockResolvedValue({
      data: { features: {} },
    } as AxiosResponse);

    await getEarthquakes(UrlFilter.magnitude_1_0);
    expect(axiosMock.get.mock.calls[0][0]).toContain(UrlFilter.magnitude_1_0);    
  });

  it('should url contains  UrlFilter.magnitude_2_5', async () => {    
    axiosMock.get.mockResolvedValue({
      data: { features: {} },
    } as AxiosResponse);

    await getEarthquakes(UrlFilter.magnitude_2_5);
    expect(axiosMock.get.mock.calls[0][0]).toContain(UrlFilter.magnitude_2_5);    
  });

  it('should url contains  UrlFilter.magnitude_4_5', async () => {    
    axiosMock.get.mockResolvedValue({
      data: { features: {} },
    } as AxiosResponse);

    await getEarthquakes(UrlFilter.magnitude_4_5);
    expect(axiosMock.get.mock.calls[0][0]).toContain(UrlFilter.magnitude_4_5);    
  });

  it('should url contains  UrlFilter.significant', async () => {    
    axiosMock.get.mockResolvedValue({
      data: { features: {} },
    } as AxiosResponse);

    await getEarthquakes(UrlFilter.significant);
    expect(axiosMock.get.mock.calls[0][0]).toContain(UrlFilter.significant);    
  });
  
});
