import { test, expect } from '@playwright/test';
import { apiClient } from '../../utils/apiClient';
import { saveApiResponse } from '../../utils/dataHelper';

test('Get user data and save to file', async () => {
    const response = await apiClient.get('/users/1');
    expect(response.status).toBe(200);

    saveApiResponse(response.data);
});
