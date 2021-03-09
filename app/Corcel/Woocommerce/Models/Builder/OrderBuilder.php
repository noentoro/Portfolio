<?php
declare(strict_types=1);

namespace App\Corcel\Woocommerce\Models\Builder;

use App\Corcel\Models\Builder\PostBuilder;

class OrderBuilder extends PostBuilder
{
    /**
     * Scope a query to only cancelled orders.
     *
     * @return PostBuilder
     */
    public function cancelled(): PostBuilder
    {
        return $this->status('cancelled');
    }

    /**
     * Scope a query to only completed orders.
     *
     * @return PostBuilder
     */
    public function completed(): PostBuilder
    {
        return $this->status('completed');
    }

    /**
     * Scope a query to only failed orders.
     *
     * @return  PostBuilder
     */
    public function failed(): PostBuilder
    {
        return $this->status('failed');
    }

    /**
     * Scope a query to only on hold orders.
     *
     * @return  PostBuilder
     */
    public function onHold(): PostBuilder
    {
        return $this->status('on-hold');
    }

    /**
     * Scope a query to only pending orders.
     *
     * @return PostBuilder
     */
    public function pending(): PostBuilder
    {
        return $this->status('pending');
    }

    /**
     * Scope a query to only processing orders.
     *
     * @return PostBuilder
     */
    public function processing(): PostBuilder
    {
        return $this->status('processing');
    }

    /**
     * Scope a query to only refunded orders.
     *
     * @return PostBuilder
     */
    public function refunded(): PostBuilder
    {
        return $this->status('refunded');
    }

    /**
     * Scope a query to orders with given status.
     *
     * @return PostBuilder
     */
    public function status($status): PostBuilder
    {
        $status = 'wc-' === substr($status, 0, 3) ? substr($status, 3) : $status;

        $builtin = [
            'cancelled',
            'completed',
            'failed',
            'on-hold',
            'pending',
            'processing',
            'refunded',
        ];

        if (in_array($status, $builtin)) {
            $status = 'wc-' . $status;
        }

        return parent::status($status);
    }
}
