class Request < ActiveRecord::Base
	def approve!
		self.approval_state = 'approved'
		self.save!
	end

	def deny!
		self.approval_state = 'denied'
		self.save!
	end
end
