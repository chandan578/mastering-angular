import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../core/services/master-service';
import { IDashboardResponse } from '../../core/model/interfaces/Dashboard.model';

@Component({
  imports: [DatePipe, DecimalPipe],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  private readonly masterService = inject(MasterService);

  protected readonly dashboardData = signal<IDashboardResponse | null>(null);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly today = new Date();

  ngOnInit(): void {
    this.masterService.getDashboard().subscribe({
      next: (response) => {
        this.dashboardData.set(response);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Dashboard data could not be loaded. Please try again.');
        this.isLoading.set(false);
      },
    });
  }
}
